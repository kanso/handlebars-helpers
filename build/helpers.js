Handlebars.registerHelper('uc', function (str) {
    return encodeURIComponent(str);
});

// TODO: add optional context argument?
Handlebars.registerHelper('include', function (name) {
    if (!exports.templates[name]) {
        throw new Error('Template Not Found: ' + name);
    }
    return exports.templates[name](this);
});
