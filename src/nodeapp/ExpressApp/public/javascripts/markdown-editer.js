$(function () {
    $('#source').bind('input propertychange', function () {
        var md = window.markdownit();
        var markdown = $(this).val();
        var html = md.render(markdown);
        $('#output').html(html);
    });
    $('#source').scroll(_.debounce(function () {
        var scrollTop = $(this).scrollTop();
        var height = $(this).height();
        var scrollHeight = $(this).prop('scrollHeight');
        var scrollPercent = scrollTop / (scrollHeight - height);
        var scrollPercentRounded = Math.round(scrollPercent * 100);
        $('#output').scrollTop($('#output').prop('scrollHeight') * (scrollPercentRounded / 100));
    }));
});