const { Project, ScriptTarget, StructureKind } = require('ts-morph');

const project = new Project({
    compilerOptions: {
        target: ScriptTarget.ES3
    }
});

const sourceFile = project.createSourceFile("./test.ts", {
  statements: [{
      kind: StructureKind.Enum,
      name: "MyEnum",
      members: [{
          name: "member"
      }]
  }, {
      kind: StructureKind.Class,
      name: "MyClass",
      // etc...
  }]
  // etc...
}, {
  overwrite: true,
});

sourceFile.saveSync(); // or saveSync();

project.saveSync();