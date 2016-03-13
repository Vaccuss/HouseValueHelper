class @Slack
  @notify: (text) ->
    if process.env.NODE_ENV is "production"
      Job.push new SlackJob text: text
