module.exports = {
  "prompts": {
    "downloadPrompte": {
      "type": "confirm",
      "message": "是否需要下载app的提示",
      "default": true
    },
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};