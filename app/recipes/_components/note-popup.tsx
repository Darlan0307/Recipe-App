// app/recipes/_components/NotePopup.tsx

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Overlay from "./overlay";
import PopupContent from "./popup-content";

const NotePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [note, setNote] = useState<string>("");

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(event.target.value);
  };

  const handleSave = () => {
    localStorage.setItem("note", note);
    console.log("Note saved:", note);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Notes</Button>
      {isOpen && (
        <>
          <Overlay onClick={handleClose} />
          <PopupContent
            note={note}
            handleNoteChange={handleNoteChange}
            handleSave={handleSave}
            handleClose={handleClose}
          />
        </>
      )}
    </div>
  );
};

export default NotePopup;
