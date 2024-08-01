#! /bin/bash

Script to update docusaurus website 
read -p "Commit Message:" MESSAGE 
cd ~/repos/lizargall/ # Go to the build repository 
git add -v ~/repos/lizargall/
git commit -m "$MESSAGE"
git push
echo "\"$MESSAGE\" pushed to build repo"
cd website

if [ $? -eq 0 ]; then
    echo "Site successfully built"
else
    echo "Site did not build, use \`npm run start\` to check for error messages"
    exit 1
fi

if [ $(ls -A "build/" | wc -l) -eq 2 ]; then
    echo "Build folder is empty, check that \`npm run start\` built to the correct repository. "
    exit 1
else
    echo "Preparing build repository..."
fi

rm -r ~/repos/lizargall.github.io/docs/* # Prepare the deploy repository by deleting all the contents of the docs folder
mv build/* ~/repos/lizargall.github.io/docs # Move the contents of the build directory in the build repo to the deploy repo.
ls -l ~/repos/lizargall.github.io/docs 
cd ~/repos/lizargall.github.io/ 
git add -v ~/repos/lizargall.github.io/docs
git commit -m "$MESSAGE"
git push
echo "\"$MESSAGE\" pushed to deploy repo"
