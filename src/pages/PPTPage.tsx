import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { Upload, BookOpen, FileUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface PPTFile {
  id: string;
  title: string;
  file_url: string;
  created_at: string;
}

const PPTPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [files, setFiles] = useState<PPTFile[]>([]);
  const [loading, setLoading] = useState(false);

  // 🔐 On page load
  useEffect(() => {
    checkUser();
    fetchFiles();
    testConnection(); // 🔎 DB connection test
  }, []);

  // 🔎 TEST DATABASE CONNECTION
  const testConnection = async () => {
    const { data, error } = await supabase.from("ppt_files").select("*");

    console.log("DATA:", data);
    console.log("ERROR:", error);
  };

  // 🔐 Check if logged-in user is teacher
  const checkUser = async () => {
    const { data } = await supabase.auth.getUser();

    if (data?.user?.email === "hemac@crescent.education") {
      setIsAdmin(true);
    }
  };

  // 📥 Fetch PPT list
  const fetchFiles = async () => {
    const { data, error } = await supabase
      .from("ppt_files")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Fetch error:", error.message);
      return;
    }

    if (data) {
      setFiles(data);
    }
  };

  // 📤 Upload PPT (Teacher only)
  const handleUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);

    try {
      const fileName = `${Date.now()}-${file.name}`;

      // Upload to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from("ppts")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data } = supabase.storage
        .from("ppts")
        .getPublicUrl(fileName);

      // Insert into Database
      const { error: insertError } = await supabase
        .from("ppt_files")
        .insert({
          title: file.name,
          file_url: data.publicUrl,
        });

      if (insertError) throw insertError;

      await fetchFiles();
      alert("Upload successful!");
    } catch (error: any) {
      console.error("Upload failed:", error.message);
      alert("Upload failed. Check console.");
    }

    setLoading(false);
    e.target.value = "";
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-16">
        <SectionWrapper id="ppt" title="PPT Resources">
          <div className="max-w-4xl mx-auto">

            {/* 👩‍🏫 ADMIN UPLOAD SECTION */}
            {isAdmin && (
              <div className="bg-card rounded-lg border-2 border-dashed border-primary/30 p-8 text-center mb-10">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <Upload className="text-primary" size={28} />
                </div>

                <h3 className="font-serif text-xl font-semibold mb-2">
                  Upload PPT Files
                </h3>

                <p className="text-muted-foreground text-sm mb-6">
                  Upload presentations for students.
                </p>

                <label>
                  <input
                    type="file"
                    accept=".ppt,.pptx,.pdf"
                    className="hidden"
                    onChange={handleUpload}
                  />

                  <Button asChild disabled={loading}>
                    <span className="flex items-center gap-2">
                      <FileUp size={16} />
                      {loading ? "Uploading..." : "Choose File"}
                    </span>
                  </Button>
                </label>
              </div>
            )}

            {/* 📁 PUBLIC FILE LIST */}
            <div>
              <h3 className="font-serif text-xl font-semibold mb-6">
                Available PPT Files
              </h3>

              {files.length === 0 ? (
                <p className="text-muted-foreground text-sm">
                  No files uploaded yet.
                </p>
              ) : (
                <div className="space-y-4">
                  {files.map((file) => (
                    <div
                      key={file.id}
                      className="flex items-center justify-between bg-card border rounded-lg p-4"
                    >
                      <div className="flex items-center gap-3">
                        <BookOpen className="text-primary" size={18} />
                        <span className="text-sm font-medium">
                          {file.title}
                        </span>
                      </div>

                      <a
                        href={file.file_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
                      >
                        Download
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
};

export default PPTPage;