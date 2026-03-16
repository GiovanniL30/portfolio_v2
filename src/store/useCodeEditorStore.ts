import { create } from "zustand";

const STARTER_CODE = `# Declare a variable
ilagay pangalan = "Juan"

# Print output
ilabas("Kumusta, " + pangalan + "!")

# While loop
ilagay bilang = 0
habang (bilang < 3) {
   ilabas(bilang)
   bilang = bilang + 1
}
`;

type CodeEditorState = {
  sourceCode: string;
  compiledSourceCode: string | null;

  setSourceCode: (code: string) => void;
  setCompiledSourceCode: (code: string | null) => void;
  clearCompiledSourceCode: () => void;
};

export const useCodeEditorStore = create<CodeEditorState>((set) => ({
  sourceCode: STARTER_CODE,
  compiledSourceCode: null,

  setSourceCode: (code) => set({ sourceCode: code }),
  setCompiledSourceCode: (code) => set({ compiledSourceCode: code }),
  clearCompiledSourceCode: () => set({ compiledSourceCode: null }),
}));
