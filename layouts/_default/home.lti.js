{{- /* [x] russfeld */}}
{{- $tree := partial "_relearn/ltiPageTree.gotmpl" .Site.Home }}
{{ $tree | jsonify (dict "indent" "  ") }}
