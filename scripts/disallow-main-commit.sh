branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
protected_branch='main'

if [ $branch == $protected_branch ]
then
  echo -e "\nCommit directly to $protected_branch branch is not allowed! \n" && exit 1
fi

exit 0
