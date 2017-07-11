// 获取 gulp
var gulp = require('gulp')
var rename = require('gulp-rename')
var uglify = require('gulp-uglify')
// 压缩 js 文件
// 在命令行使用 gulp script 启动此任务
gulp.task('script', function() {
    // 找到文件
    gulp.src('js/*.js')
        // 压缩文件
        .pipe(uglify())
        // 重命名压缩后的文件
        .pipe(rename({ 
            extname: '.min.js' 
        }))
        // 另存压缩后的文件
        .pipe(gulp.dest('dist/js'))
})
