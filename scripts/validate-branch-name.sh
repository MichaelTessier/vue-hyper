local_branch=$BRANCH_NAME

if [ -z $local_branch ]
then
    local_branch="$(git rev-parse --abbrev-ref HEAD)"
fi

valid_branch_regex="^(feat|fix|refactor|config|chore)\/"

hotfix_branch_regex="^(hotfix)\/"

message="\033[0;31mPlease use a valid branch name.\033[1;35m"


if [[ ! $local_branch =~ $valid_branch_regex && ! $local_branch =~ $hotfix_branch_regex ]]
then
    echo -e " $message"
    exit 1
fi

exit 0
