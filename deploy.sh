#!/bin/sh
msg="deploy blog"

cd ../jokingzhang.github.io

git rm -rf .
git clean -fxd

cd ../blog-portal

cp -rf build/* ../jokingzhang.github.io

cd ../jokingzhang.github.io

git add .

git commit -m"${msg}"

git push -u origin master

echo "博客更新成功！"