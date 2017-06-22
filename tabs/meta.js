module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Act file name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A act page template"
    },
    "downloadPrompte": {
      "type": "confirm",
      "message": "是否需要下载app的提示",
      "default": true
    },
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};