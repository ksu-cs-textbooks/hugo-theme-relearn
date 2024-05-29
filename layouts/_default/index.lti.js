{{- partialCached "page-meta.hugo" . .RelPermalink }}
{{- $format := partial "get-format.hugo" . }}
{{- $outputFormat := partial "output-format.hugo" (dict "page" . "format" $format) }}
{{- $pages := slice }}
{{- range .Site.Pages }}
  {{- if and .Title .RelPermalink (or (ne (.Scratch.Get "relearnIsHiddenStem") true) (ne .Site.Params.disableSearchHiddenPages true) ) }}
    {{- $tags := slice }}
    {{- range .GetTerms "tags" }}
      {{- $tags = $tags | append (partial "pageHelper/title.hugo" (dict "page" .Page "linkTitle" true "format" $format "outputFormat" $outputFormat) | plainify) }}
    {{- end }}
    {{- $pages = $pages | append (dict
      "uri" (partial "relLangPrettyUglyURL.hugo" (dict "to" . "abs" true))
      "title" (partial "pageHelper/title.hugo" (dict "page" . "format" $format "outputFormat" $outputFormat) | plainify)
      "tags" $tags
      "breadcrumb" (partial "breadcrumbs.html" (dict "page" . "dirOnly" true) | plainify | htmlUnescape | chomp)
      "description" (or .Description .Summary | plainify | htmlUnescape | chomp)
      "modified" (safeHTML ( .Lastmod.Format "2006-01-02T15:04:05-07:00" ) )
    ) }}
  {{- end }}
{{- end -}}
var relearn_lti_index = {{ $pages | jsonify (dict "indent" "  ") }}