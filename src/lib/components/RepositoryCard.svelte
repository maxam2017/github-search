<script lang="ts">
  import { format } from 'date-fns';
  import { LangColorMap } from '$lib/constants';

  import type { Repository } from '$lib/types';

  export let repository: Repository = {
    id: 320837895,
    node_id: 'MDEwOlJlcG9zaXRvcnkzMjA4Mzc4OTU=',
    name: '1',
    full_name: 'ChuheGit/1',
    private: false,
    owner: {
      login: 'ChuheGit',
      id: 75603548,
      node_id: 'MDQ6VXNlcjc1NjAzNTQ4',
      avatar_url: 'https://avatars.githubusercontent.com/u/75603548?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/ChuheGit',
      html_url: 'https://github.com/ChuheGit',
      followers_url: 'https://api.github.com/users/ChuheGit/followers',
      following_url: 'https://api.github.com/users/ChuheGit/following{/other_user}',
      gists_url: 'https://api.github.com/users/ChuheGit/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/ChuheGit/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/ChuheGit/subscriptions',
      organizations_url: 'https://api.github.com/users/ChuheGit/orgs',
      repos_url: 'https://api.github.com/users/ChuheGit/repos',
      events_url: 'https://api.github.com/users/ChuheGit/events{/privacy}',
      received_events_url: 'https://api.github.com/users/ChuheGit/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/ChuheGit/1',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/ChuheGit/1',
    forks_url: 'https://api.github.com/repos/ChuheGit/1/forks',
    keys_url: 'https://api.github.com/repos/ChuheGit/1/keys{/key_id}',
    collaborators_url: 'https://api.github.com/repos/ChuheGit/1/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/ChuheGit/1/teams',
    hooks_url: 'https://api.github.com/repos/ChuheGit/1/hooks',
    issue_events_url: 'https://api.github.com/repos/ChuheGit/1/issues/events{/number}',
    events_url: 'https://api.github.com/repos/ChuheGit/1/events',
    assignees_url: 'https://api.github.com/repos/ChuheGit/1/assignees{/user}',
    branches_url: 'https://api.github.com/repos/ChuheGit/1/branches{/branch}',
    tags_url: 'https://api.github.com/repos/ChuheGit/1/tags',
    blobs_url: 'https://api.github.com/repos/ChuheGit/1/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/ChuheGit/1/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/ChuheGit/1/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/ChuheGit/1/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/ChuheGit/1/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/ChuheGit/1/languages',
    stargazers_url: 'https://api.github.com/repos/ChuheGit/1/stargazers',
    contributors_url: 'https://api.github.com/repos/ChuheGit/1/contributors',
    subscribers_url: 'https://api.github.com/repos/ChuheGit/1/subscribers',
    subscription_url: 'https://api.github.com/repos/ChuheGit/1/subscription',
    commits_url: 'https://api.github.com/repos/ChuheGit/1/commits{/sha}',
    git_commits_url: 'https://api.github.com/repos/ChuheGit/1/git/commits{/sha}',
    comments_url: 'https://api.github.com/repos/ChuheGit/1/comments{/number}',
    issue_comment_url: 'https://api.github.com/repos/ChuheGit/1/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/ChuheGit/1/contents/{+path}',
    compare_url: 'https://api.github.com/repos/ChuheGit/1/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/ChuheGit/1/merges',
    archive_url: 'https://api.github.com/repos/ChuheGit/1/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/ChuheGit/1/downloads',
    issues_url: 'https://api.github.com/repos/ChuheGit/1/issues{/number}',
    pulls_url: 'https://api.github.com/repos/ChuheGit/1/pulls{/number}',
    milestones_url: 'https://api.github.com/repos/ChuheGit/1/milestones{/number}',
    notifications_url: 'https://api.github.com/repos/ChuheGit/1/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/ChuheGit/1/labels{/name}',
    releases_url: 'https://api.github.com/repos/ChuheGit/1/releases{/id}',
    deployments_url: 'https://api.github.com/repos/ChuheGit/1/deployments',
    created_at: '2020-12-12T13:32:05Z',
    pushed_at: '2021-08-11T15:49:27Z',
    git_url: 'git://github.com/ChuheGit/1.git',
    ssh_url: 'git@github.com:ChuheGit/1.git',
    clone_url: 'https://github.com/ChuheGit/1.git',
    svn_url: 'https://github.com/ChuheGit/1',
    homepage: null,
    size: 3237,
    stargazers_count: 652,
    watchers_count: 652,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 150,
    archived: false,
    disabled: false,
    open_issues_count: 2,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 150,
    open_issues: 2,
    watchers: 652,
    default_branch: 'main',
    score: 1,
  };

  let dotColor = LangColorMap[repository.language];
  let pushedAtWording = `Updated ${format(new Date(repository.pushed_at), 'LLL dd')}`;
</script>

<li class="p-4 bg-white shadow-sm mb-4">
  <div class="flex items-center">
    <img
      class="rounded-full mr-3"
      width="32"
      height="32"
      src={repository.owner.avatar_url}
      alt={repository.owner.login}
    />
    <h2 class="text-md font-semibold text-gray-800 break-all">{repository.full_name}</h2>
  </div>
  <div class="py-2 text-md text-gray-500 break-all">
    {repository.description}
  </div>
  <div class="flex items-center mt-1 text-gray-500 text-sm">
    <div class="w-2 h-2 rounded mr-1" style={`background: ${dotColor}`} />
    {repository.language}
    <!-- GitHub 🌟 -->
    <svg class="ml-4 mr-1 fill-gray-500" viewBox="0 0 16 16" width="16" height="16"
      ><path
        fill-rule="evenodd"
        d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
      /></svg
    >
    {repository.stargazers_count}
    <span class="ml-6 mr-1">{pushedAtWording}</span>
  </div>
</li>
