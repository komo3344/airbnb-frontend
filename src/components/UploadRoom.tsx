import useHostOnlyPage from "./HostOnlyPage";
import ProtectedPage from "./ProtectedPage";

export default function UploadRoom() {
  useHostOnlyPage();
  return (
    <ProtectedPage>
      <h1>Roommmmmmmm</h1>
    </ProtectedPage>
  );
}
