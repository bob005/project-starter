var gulp = require("gulp"),
    less = require("gulp-less"),
    minifyCSS = require("gulp-csso"),
    googleWebFonts = require("gulp-google-webfonts"),
    htmlreplace = require("gulp-html-replace"),
    replace = require("gulp-replace"),
    clean = require("gulp-clean");

var options = {
    fontsDir: "assets/fonts/",
    cssDir: "assets/css/",
    cssFilename: "fonts.css"
};

var baseDir = "src/assets";

gulp.task("clean", function () {
    return gulp.src("build/", {read: false})
        .pipe(clean());
});

gulp.task("fonts", ["clean"], function () {
    return gulp.src(baseDir + "/fonts/fonts.list")
        .pipe(googleWebFonts(options))
        .pipe(gulp.dest("build/"))
});

gulp.task("fontspathfixed", [ "fonts" ], function(){
    gulp.src(["build/assets/css/fonts.css"])
        .pipe(replace("assets/", "../"))
        .pipe(gulp.dest("build/assets/css/"));
});

gulp.task("css", ["fontspathfixed"], function(){
    return gulp.src(baseDir + "/less/*.less")
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest("build/assets/css"))
});

gulp.task("html", ["css"], function() {
    gulp.src("src/*.html")
        .pipe(htmlreplace({
            "css": "assets/css/styles.css"
        }))
        .pipe(gulp.dest("build"));
});

gulp.task("copyassets", ["html"], function () {
    gulp.src([
        baseDir + "/**",
        "!" + baseDir + "/less{,/**}",
        "!" + baseDir + "/fonts{,/**}",
    ]).pipe(gulp.dest("build/assets"));
});

gulp.task("build", [ "copyassets" ]);
gulp.task("default", [ "build" ]);