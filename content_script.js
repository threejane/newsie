walk(document.body);

function walk(node)
{
    // Stolen from http://is.gd/mwZp7E
    
    var child, next;
    
    switch ( node.nodeType )
    {
        case 1: // Element
        case 9: // Document
        case 11: // Document fragment
            child = node.firstChild;
            while ( child )
            {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;
        
        case 3: // Text node
            replaceText(node);
            break;
    }
}

function replaceText(textNode)
{
    // inspired by the cloud-to-butt extension at https://github.com/panicsteve/cloud-to-butt, and also this: 
    
    var t = textNode.nodeValue;
    
    t = t.replace(/\bBlog\b/g, "Newsie");
    t = t.replace(/\bWeblog\b/g, "Newsie");
    t = t.replace(/\bSite\b/g, "Newsie");
    t = t.replace(/\bWebsite\b/g, "Newsie");
    t = t.replace(/\bblog\b/g, "newsie");
    t = t.replace(/\bweblog\b/g, "newsie");
    t = t.replace(/\bsite\b/g, "newsie");
    t = t.replace(/\bwebsite\b/g, "newsie");
    t = t.replace(/\bBlogs\b/g, "Newsies");
    t = t.replace(/\bWeblogs\b/g, "Newsies");
    t = t.replace(/\bSites\b/g, "Newsies");
    t = t.replace(/\bWebsites\b/g, "Newsies");
    t = t.replace(/\bblogs\b/g, "newsies");
    t = t.replace(/\bweblogs\b/g, "newsies");
    t = t.replace(/\bsites\b/g, "newsies");
    t = t.replace(/\bwebsites\b/g, "newsies");
    
    textNode.nodeValue = t;
}