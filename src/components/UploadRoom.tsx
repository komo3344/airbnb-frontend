import HostOnlyPage from "./HostOnlyPage";
import ProtectedPage from "./ProtectedPage";

export default function UploadRoom() {
  return (
    <ProtectedPage>
      <HostOnlyPage>
        <h1>Roommmmmmmm</h1>
      </HostOnlyPage>
    </ProtectedPage>
  );
}
