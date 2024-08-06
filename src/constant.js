export const fileData = [
  {
    id: 1,
    structure: "File",
    name: "images.txt",
  },
  {
    id: 2,
    structure: "File",
    name: "images.txt",
  },
  {
    id: 3,
    structure: "Folder",
    name: "Documents",
    files: [
      {
        id: 3.3,
        structure: "Folder",
        name: "Documents 1",
        files: [
          {
            id: 3.31,
            structure: "Folder",
            name: "Documents 1.3",
            files: [
              {
                id: 3.311,
                structure: "Folder",
                name: "Documents 1.33",
                files: [
                  {
                    id: 1,
                    structure: "File",
                    name: "images.txt",
                  },
                  {
                    id: 2,
                    structure: "File",
                    name: "images.txt",
                  },
                ],
              },
              {
                id: 1,
                structure: "File",
                name: "images.txt",
              },
              {
                id: 2,
                structure: "File",
                name: "images.txt",
              },
            ],
          },
          
        ],
      },
    ],
  },
];
