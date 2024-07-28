#! /bin/sh

# Script to update docusaurus website 
MESSAGE="Testing variables in the script"
cd ~/repos/lizargall/ # Go to the build repository 
git add -v ~/repos/lizargall/
git commit -m "$MESSAGE"
echo \"$MESSAGE\" "pushed to build repo"
# git push
# cd website
# npm run build # Build the site
# rm -r ~/repos/lizargall.github.io/docs/* # Prepare the deploy repository by deleting all the contents of the docs folder
# mv build/* ~/repos/lizargall.github.io/docs # Move the contents of the build directory in the build repo to the deploy repo.
# ls -l ~/repos/lizargall.github.io/docs 
# cd ~/repos/lizargall.github.io/ 
# git add -v ~/repos/lizargall.github.io/docs
# git commit -m $MESSAGE
# git push