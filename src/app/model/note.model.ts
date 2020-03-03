export interface Note {
  id: number;
  title: string;
}

export function createNewNote(title: string = ''): Note {
  return {
    id: undefined,
    title
  };
}
