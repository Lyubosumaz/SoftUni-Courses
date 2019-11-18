const Thread = require('../models/Thread');
const User = require('../models/User');
const Message = require('../models/Message');

module.exports = {
    findThread: async (req, res) => {
        try {
            const currentUser = await User.findOne({
                username: req.user.username
            });

            const otherUser = await User.findOne({
                username: req.body.username
            });

            const thread = await Thread.findOne({
                users: {
                    $all: [currentUser._id, otherUser._id]
                }
            });

            if (!thread) {
                await Thread.create({
                    users: [currentUser._id, otherUser._id]
                });
            }

            res.redirect(`/threads/${otherUser.username}`);

        } catch (err) { console.log(err); }
    },
    openThread: async (req, res) => {
        try {
            const otherUser = await User.findOne({
                username: req.params.username
            });

            const thread = await Thread.findOne({
                users: {
                    $all: [req.user._id, otherUser._id]
                }
            });

            const messages = await Message.find({
                thread: thread._id
            });

            messages.forEach(message => {
                if (message.user.toString() !== req.user._id.toString()) {
                    message.isMine = true;
                }
                if (message.content.startsWith('http')) {
                    // && message.content.endsWith('.jpg')
                    message.isImage = true;
                }
            });
            let otherIsBlock = false;
            let iamBlock = false;
            if (otherUser.blockedUsers.includes(req.user.username)) {
                iamBlock = true;
            }
            if (req.user.blockedUsers.includes(req.params.username)) {
                otherIsBlock = true;
            }

            res.render('threads/chatroom', {
                username: req.params.username,
                messages,
                id: thread._id,
                otherIsBlock,
                iamBlock,
            });
        } catch (err) { console.log(err); }
    },
    sendMessage: async (req, res) => {
        const content = req.body.message;
        const user = await User.findOne({
            username: req.params.username
        });
        const thread = req.body.threadId;
        try {
            await Message.create({
                content,
                user: user._id,
                thread
            });
            res.redirect('/threads/' + req.params.username);
        } catch (err) { console.log(err); }
    },
    removeThread: async (req, res) => {
        try {
            await Message.remove({ thread: req.params.threadId });
            await Thread.findByIdAndRemove(req.params.threadId);
            res.redirect('/');
        } catch (err) { console.log(err); }
    }
}