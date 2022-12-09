var obj = {
  children: [
    {
      name: "a",
      children: [
        {
          name: "c",
          children: [
            {
              name: "d",
              size: 81,
            },
            {
              name: "h",
              size: 999,
            },
          ],
          size: 0,
        },
      ],
      size: 0,
    },
    {
      name: "f",
      size: 99,
    },
    {
      name: "g",
      size: 100,
    },
    {
      name: "b",
      children: [
        {
          name: "i",
          size: 10,
        },
        {
          name: "j",
          children: [
            {
              name: "k",
              size: 88,
            },
            {
              name: "l",
              children: [
                {
                  name: "m",
                  size: 900,
                },
              ],
              size: 0,
            },
          ],
          size: 0,
        },
      ],
      size: 0,
    },
  ],
  size: 0,
};

var sizes = 0;

const byParent = (parentObj) => {
  let size = parentObj.size;
  let name = parentObj.name;
  let listChild = parentObj.children;
  if (listChild.length > 0) {
    for (var i = 0; i < listChild.length; i++) {
      byChild(listChild[i]);
    }
  } else {
    parentObj.size = size;
  }
}

const byChild = (childObj) => {
  let name = childObj.name;
  let listChild = childObj.children;
  if (listChild) {
    for (var i = 0; i < listChild.length; i++) {
      childObj.size += listChild[i].size;
      byChild(listChild[i]);
    }
  } else {
    sizes = childObj['size']
    childObj['size'] = sizes;
  }
}
byParent(obj);
console.log(obj)