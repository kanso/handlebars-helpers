Handlebars.registerHelper('uc', function (str) {
    return encodeURIComponent(str);
});

Handlebars.registerHelper('include', function (name, context) {
    if (!handlebars.templates[name]) {
        throw new Error('Template Not Found: ' + name);
    }
    return handlebars.templates[name](context || this);
});
