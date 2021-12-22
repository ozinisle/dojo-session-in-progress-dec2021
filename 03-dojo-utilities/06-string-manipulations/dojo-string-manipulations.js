require(["dojo/string"], function(string){
    var a = string.pad("pad me", 10);
    console.log(`string.pad("pad me", 10) >>> ${a}`);

    var b = string.rep("dup", 10);
    console.log(`string.rep("dup", 10) >>> ${b}`);

    var c = string.substitute("${replace} - ${me}", { replace: "foo", me: "bar" });
    console.log(`string.substitute("$ {replace} - $ {me}", { replace: "foo", me: "bar" }) >>> ${c}`);

    var d = string.trim("  trim me  ");
    console.log(`string.trim("  trim me  ") >>> ${d}`)
  });
  