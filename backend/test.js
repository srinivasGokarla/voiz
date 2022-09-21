class Node {
    constructor(data)
    {
        this.key = data;
        this.child = []
    }
};
 

function numberOfChildren(root, x)
{
   
    var numChildren = 0;
 
    if (root == null)
        return 0;
    var q = [];
    q.push(root);
 
    while (q.length != 0)
    {
        var n = q.length;
 
     
        while (n > 0) {
 
            var p = q[0];
            q.shift();
            if (p.key == x)
            {
                numChildren = numChildren +
                              p.child.length;
                return numChildren;
            }
 
            
            for (var i = 0; i < p.child.length; i++)
                q.push(p.child[i]);
            n--;
        }
    }
    return numChildren;
}


var root = new Node("Black");
(root.child).push(new Node("Blue"));
(root.child[0].child).push(new Node("Red"));
(root.child[0].child).push(new Node("Green"));
(root.child[0].child[1].child).push(new Node("Purple"));
(root.child[0].child[1].child[0].child).push(new Node("Brown"));
(root.child[0].child[1].child[0].child).push(new Node("Pink"));
(root.child[0].child[1].child[0].child[0].child).push(new Node("Crimson"));


var x = "Crimson";

console.log(numberOfChildren(root, x));

// 1. node.depth() should return the depth of the node
// 2. node.root() should return the root element
// 3. node.children() should return children of the node as an array
// 3. node.hasChild(&#39;Red&#39;) Should return if Red is child of the node
// 4. node.child(&#39;Red&#39;) should return the child node
// 5. node.descendent(&#39;Red&#39;) should return node of type Red if it is a descendent of the node
// 6. node.isRoot() should return true if its already a root of the tree

