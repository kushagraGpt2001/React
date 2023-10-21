const heading = React.createElement("div",{id:"parent"},
               [React.createElement("div",{id:"child"},
               [React.createElement("h1",{},"i'm h1 tag")],[React.createElement("h2",{},"im h2 tag")]),
               [React.createElement("div",{id:"child2"},
               [React.createElement("ol",{},
               [React.createElement("li",{},"red")],
               [React.createElement("li",{},"blue")],
               [React.createElement("li",{},"yellow")],
               [React.createElement("li",{},"green")])])]
            ])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);