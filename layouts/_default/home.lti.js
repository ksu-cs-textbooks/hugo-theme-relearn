{{- /* [x] russfeld */}}
{{- $tree := partial "_relearn/ltiPageTree.gotmpl" .Site.Home }}
var relearn_lti_index = {{ $tree | jsonify (dict "indent" "  ") }}
