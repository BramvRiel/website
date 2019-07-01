$(function () {
    $('#source').bind('input propertychange', function () {
        var md = window.markdownit();
        var markdown = $(this).val();
        var html = md.render(markdown);
        $('#output').html(html);
    });
});