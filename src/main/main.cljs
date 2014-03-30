(ns main)

(defn init []
  
  (def itemList
    (list
     (def description (goog.dom.getElement "description"))
     (def home (goog.dom.getElement "home"))
     (def conceptProofs (goog.dom.getElement "conceptProofs"))
     (def prototype (goog.dom.getElement "prototype"))))

  (goog.events.listen (goog.dom.getElement "descriptionTouch") "click" #(showItem "description"))
  (goog.events.listen (goog.dom.getElement "homeTouch") "click" #(showItem "home"))
  (goog.events.listen (goog.dom.getElement "conceptProofsTouch") "click" #(showItem "conceptProofs"))
  (goog.events.listen (goog.dom.getElement "prototypeTouch") "click" #(showItem "prototype"))
  
)  
  

(defn showItem [ name ]
  (doseq [v itemList ]
    (cond
     ( = (. v -id) name)
     (do
       (set! (.. v -style -display) "inline")
       (set! (. v -className) "enabled"))
     (= (. v -className) "enabled")
     (do
       (goog.events.listenOnce v "transitionend" (fn [] (set! (.. v -style -display) "none"))) 
       (set! (. v -className) "disabled")))))

