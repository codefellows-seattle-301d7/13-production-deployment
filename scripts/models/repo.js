(function(module) {
  var repos = {};

  repos.allRepos = [];

  // TODO: Refactor this ajax method into a get method to the proxy
  //  'end point' provided by server.js.
  repos.requestRepos = function(callback) {
    // replaced with git request below, done in class
    $.get('/github/users/codefellows-seattle-301d7/repos' +
          '?per_page=10&sort=updated')
          .done(function(data) {
            repos.allrepos = data;
          }).done(callback); // .done chaining explicitly invokes the order of functions
    // commended / deleted this out in class
    // $.ajax({
    //   url: 'https://api.github.com/users/codefellows/repos' +
    //         '?per_page=10' +
    //         '&sort=updated',
    //   type: 'GET',
    //   headers: { 'Authorization': 'token ' + githubToken },
    //   success: function(data) {
    //     repos.all = data;
    //   }
    // }).done(callback);
  };

  repos.withTheAttribute = function(attr) {
    /* DONE: This Model method filters the full repos collection based
        on a particular attribute. You could use this to filter all
        repos that have a non-zero `forks_count`, `stargazers_count`,
        or `watchers_count`. */
    return repos.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.repos = repos;
})(window);
