const gulp = require('gulp')
const babel = require('gulp-babel')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')

gulp.task('babel-minify', function() {
    gulp.src('src/app.js')
        // babel 转码
		.pipe(babel({
			presets: ['babel-preset-es2015']
		}))
        // 压缩
        .pipe(uglify())
        // 重命名文件
        .pipe(rename({
            extname: '.min.js'
        }))
        // 导出
		.pipe(gulp.dest('dist'))

})


// 设为默认任务
gulp.task('default', ['babel-minify'])
