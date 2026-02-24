import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const publications = [
  {
    sno: 1,
    title:
      "TDMA Based Reader Anti-Collision Algorithm for Cluster Based Dense RFID Networks Using Particle Swarm Optimization Approach",
    journal: "Australian Journal of Basic and Applied Sciences",
    publication: "PP-209-215, July 2015",
    indexed: true,
  },
  {
    sno: 2,
    title:
      "Minimizing Mobility for Data Aggregation In Cluster-Based RFID Network",
    journal:
      "International Journal of Advanced Research in Biology Engineering Science and Technology (IJARBEST), ISSN: 2456-5717",
    publication: "—",
    indexed: true,
  },
  {
    sno: 3,
    title:
      "Performance comparison of Dragonfly and Firefly algorithm in the RFID network to improve the data transmission",
    journal: "Journal of Theoretical and Applied Information Technology",
    publication: "Vol. 95, No. 1, 2017, Page no.: 59-65",
    indexed: true,
  },
  {
    sno: 4,
    title:
      "Naive Bayes algorithm for reducing the redundant data in the cluster based RFID network",
    journal: "International Journal of Pure and Applied Mathematics",
    publication: "Vol. 118, No. 9, 2017, Page no.: 729-735",
    indexed: true,
  },
  {
    sno: 5,
    title:
      "Graph coloring based TDMA algorithm for scheduling the readers in RFID network to avoid reader collision",
    journal: "Journal of Engineering and Applied Sciences",
    publication: "August 2017",
    indexed: true,
  },
  {
    sno: 6,
    title:
      "Tag count based priority scheduling algorithm for mitigating the RFID collisions",
    journal:
      "Indonesian Journal of Electrical Engineering and Computer Science",
    publication: "April 2019",
    indexed: true,
  },
  {
    sno: 7,
    title:
      "Enhancing Hardware and Software performance in RFID collisions",
    journal: "Cogent Engineering",
    publication: "October 2019",
    indexed: true,
  },
  {
    sno: 8,
    title:
      "Collision Mitigation algorithm for tracking of RFID based assets in Defense",
    journal: "EAI Endorsed Transactions on Energy Web",
    publication: "May 2020",
    indexed: true,
  },
  {
    sno: 9,
    title:
      "Complex event processing for effective poultry management in farmlands with predictive analytics",
    journal: "International Journal of Cloud Computing",
    publication: "July 2022",
    indexed: true,
  },
];

const PublicationsPage = () => (
  <>
    <Navbar />
    <div className="pt-16">
      <SectionWrapper id="publications" title="Publications">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <p className="text-center text-muted-foreground mb-8">
            Published 25+ papers in international journals and conferences.
          </p>
          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary/10">
                  <TableHead className="text-primary font-bold w-16">S. No.</TableHead>
                  <TableHead className="text-primary font-bold">Title of the Article</TableHead>
                  <TableHead className="text-primary font-bold">Journal / Place of Publication</TableHead>
                  <TableHead className="text-primary font-bold">Month, Year & Volume</TableHead>
                  <TableHead className="text-primary font-bold text-center w-32">Scopus / UGC CARE</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {publications.map((pub) => (
                  <TableRow key={pub.sno} className="hover:bg-secondary/50">
                    <TableCell className="font-medium text-center">{pub.sno}</TableCell>
                    <TableCell className="font-medium">{pub.title}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{pub.journal}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{pub.publication}</TableCell>
                    <TableCell className="text-center">
                      <Badge variant={pub.indexed ? "default" : "secondary"}>
                        {pub.indexed ? "Yes" : "No"}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
    <Footer />
  </>
);

export default PublicationsPage;
