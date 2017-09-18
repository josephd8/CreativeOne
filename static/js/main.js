function courseProgress() {
    var start = new Date(2017,9,5),
        end = new Date(2017,12,21),
        today = new Date();
    return (Math.round(( ( today - start ) / ( end - start ) ) * 100) + "%");
}