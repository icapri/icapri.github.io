export interface UtilityMenuItem {
  name: string;
  children?: UtilityMenuItem[];
  route?: string;
}

export const utilities: UtilityMenuItem[] = [
  {
    name: 'Arrays',
    children: [
      {
        name: 'supportedTypedArrays()',
        route: '/arrays1'
      },
      {
        name: 'addFirst()',
        route: '/arrays2'
      },
      {
        name: 'clone()',
        route: '/arrays3'
      },
      {
        name: 'contains()',
        route: '/arrays4()',
      },
      {
        name: 'containsAny()',
        route: '/arrays5',
      }
    ]
  },
  {
    name: 'Blobs',
    children: [
      {
        name: 'fromFile()',
        route: '/blobs1'
      },
      {
        name: 'fromImageData()',
        route: '/blobs2'
      },
      {
        name: 'fromObjectURL()',
        route: '/blobs3'
      },
      {
        name: 'isBlob()',
        route: '/blobs4'
      },
      {
        name: 'toBase64()',
        route: '/blobs5'
      },
      {
        name: 'toFile()',
        route: '/blobs6'
      },
      {
        name: 'toImageData()',
        route: '/blobs7'
      },
      {
        name: 'toObjectURL()',
        route: '/blobs8'
      },
    ]
  },
  {
    name: 'Chars',
  },
  {
    name: 'Dates',
  },
  {
    name: 'Maps',
  },
  {
    name: 'Numbers',
  },
  {
    name: 'Objects',
  },
  {
    name: 'Sets',
  },
  {
    name: 'Strings',
  },
  {
    name: 'Utils',
  }
];
