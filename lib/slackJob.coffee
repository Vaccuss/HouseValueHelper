class SlackJob extends Job
  handleJob: () ->
    HTTP.post Meteor.settings.slack.url
      data:
        channel: "#house-value-server"
        username: "Server Events"
        text: @params.text
        link_names: 1