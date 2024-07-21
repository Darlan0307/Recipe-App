import { Button } from "@/components/ui/button";

const PopupContent = ({
  note,
  handleNoteChange,
  handleSave,
  handleClose,
}: {
  note: string;
  handleNoteChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSave: () => void;
  handleClose: () => void;
}) => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-xl font-bold mb-4">My Notes</h2>
      <textarea
        value={note}
        onChange={handleNoteChange}
        className="w-full h-40 p-2 border rounded-md"
        placeholder="Type your notes here..."
      />
      <div className="mt-4 flex justify-end space-x-4">
        <Button
          onClick={handleClose}
          className="px-4 py-2 border rounded-md bg-gray-300 hover:bg-gray-400"
        >
          Close
        </Button>
        <Button
          onClick={handleSave}
          className="px-4 py-2 border rounded-md bg-blue-500 text-white hover:bg-blue-600"
        >
          Save
        </Button>
      </div>
    </div>
  </div>
);

export default PopupContent;
