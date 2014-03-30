(defproject pontiff-website "0.1.0-SNAPSHOT"
:description "FIXME: write description"
:url "http://example.com/FIXME"
:license {:name "Eclipse Public License"
:url "http://www.eclipse.org/legal/epl-v10.html"}
:dependencies [[org.clojure/clojure "1.5.1"]
               [org.clojure/clojurescript "0.0-2173"]
               [org.clojure/google-closure-library-third-party "0.0-2029"]]
:plugins [[lein-cljsbuild "1.0.2"]]
:cljsbuild {
  :builds [{
  :source-paths ["src/main"]
  :compiler {
      :output-to "pub/js/main/index.js"
      :output-dir "pub/js/main"       
      :optimizations :simple
      :pretty-print false}}]}) 

