const Team = require('../models/Team');
const Project = require('../models/Project');
const Users = require('../models/User');

module.exports = {
    get: {
        createTeam: (req, res) => {
            res.render('create/team');
        },
        createProject: (req, res) => {
            res.render('create/project');
        },
        manageProjects: async (req, res) => {
            const teams = await Team.find();
            const projects = await Project.find();
            res.render('manage/projects', { teams, projects });
        },
        manageTeams: async (req, res) => {
            const users = await Users.find({ roles: 'User' });
            const teams = await Team.find();
            res.render('manage/teams', { users, teams });
        },
    },
    post: {
        createTeam: async (req, res) => {
            const { name } = req.body;
            try {
                await Team.create({ name });
                res.redirect('/');
            } catch (err) { console.log(err); }
        },
        createProject: async (req, res) => {
            const { name, description } = req.body;
            try {
                await Project.create({ name, description });
                res.redirect('/');
            } catch (err) { console.log(err); }
        },
        manageProjects: async (req, res) => {
            const { team, project } = req.body;
            try {
                await Team.findOneAndUpdate({ _id: team }, { $addToSet: { projects: project } });
                await Project.findOneAndUpdate({ _id: project }, { team: team })
                res.redirect('/manage/projects');
            } catch (err) { console.log(err); }
        },
        manageTeams: async (req, res) => {
            const { user, team } = req.body;
            try {
                await Users.findOneAndUpdate({ _id: user }, { $addToSet: { teams: team } });
                await Team.findOneAndUpdate({ _id: team }, { $addToSet: { members: user } });
                res.redirect('/manage/teams');
            } catch (err) { console.log(err); }
        },
    }
};