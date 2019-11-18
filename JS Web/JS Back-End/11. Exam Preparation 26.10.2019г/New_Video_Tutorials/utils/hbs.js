const exphbsHelpers = {
    select: function (selected, options) {
        return options.fn(this).replace(new RegExp(` value="${selected}"`), '$& selected="selected"');
    },
};

module.exports = exphbsHelpers;