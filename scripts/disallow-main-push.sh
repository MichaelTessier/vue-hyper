branch=$(git rev-parse --abbrev-ref HEAD)
protected_branch='main'

if [[ $branch == $protected_branch ]]
then
  echo -e "\n Cannot push to remote $branch branch, please create your own branch and use PR." && exit 1
fi

exit 0
