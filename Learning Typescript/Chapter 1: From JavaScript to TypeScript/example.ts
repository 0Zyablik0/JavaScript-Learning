const firstName = "Artem";
const lastName = "Kryukov";
const nameLength = firstName.length;


function sayName(name) {
    console.log(name);
}

sayName(firstName);



class Material {
};

interface Painter {
    finish(): boolean;
    ownMaterials(): Material[];
    paint(painting: string, materials: Material[]): boolean;
}