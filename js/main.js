var demo1 = new autoComplete({
    selector: '#inBox',
    minChars: 1,
    source: function (term, suggest) {
        term = term.toLowerCase();
        var suggestions = [];
        for (i = 0; i < ns.choices.length; i++)
            if (~ns.choices[i].toLowerCase().indexOf(term)) suggestions.push(ns.choices[i]);
        suggest(suggestions);
        clearNodes();
    },
    onSelect: function (e, term, item) {
        console.log(item.getAttribute('data-val'));

    }
});