import Link from "next/link";
import Flex from "../Containers/Flex";
import styles from "./rc.module.css";
type Detail = {
  title: string;
  data?: string;
};
interface ResumeCardProps {
  name: string;
  summary: string;
  details: Detail[];
}
export function ResumeSummaryCard({ name, summary, details }: ResumeCardProps) {
  return (
    <div className={styles.resumeCard}>
      <Flex direction={"col"} gap={20}>
        <h4 className={styles.title}>{name}</h4>
        {summary && (
          <p>
            <em>{summary}</em>
          </p>
        )}

        {details && (
          <ul>
            {details.map((value, index) => {
              return (
                <li key={index}>
                  <Link
                    href={
                      value.title == "email"
                        ? `mailto:${value.data}`
                        : value.title == "contact"
                        ? `tel:${value.data}`
                        : "#"
                    }
                  >
                    {value.data}
                  </Link>{" "}
                </li>
              );
            })}
          </ul>
        )}
      </Flex>
    </div>
  );
}

interface ResumeEducationCardProps {
  degree: string;
  college: string;
  address: string;
  link?: string;
  description: string;
  duration: string;
  percentage?: number;
  CGPA?: number;
}
export function ResumeEducationCard({
  degree,
  college,
  address,
  link,
  description,
  duration,
  CGPA,
  percentage,
}: ResumeEducationCardProps) {
  return (
    <div className={styles.resumeCard}>
      <Flex direction={"col"} gap={20}>
        <h4 className={styles.title}>{degree}</h4>
        <Flex direction="row" gap={40}>
          {duration && <p className={styles.duration}> {duration}</p>}
          {CGPA && <p className={styles.duration}> CGPA :{CGPA}</p>}
          {percentage && (
            <p className={styles.duration}> Percentga :{percentage}</p>
          )}
        </Flex>

        <p>
          <em>
            <Link href={link || ""}>
              {college} ,&nbsp; {address}
            </Link>
          </em>
        </p>

        {description && <p>{description}</p>}
      </Flex>
    </div>
  );
}

interface ResumeExpericenceCardProps {
  company: string;
  designation: string;
  address?: string;
  link?: string;
  description: string;
  duration: string;
}
export function ResumeExpericenceCard({
  designation,
  company,
  address,
  link,
  description,
  duration,
}: ResumeExpericenceCardProps) {
  return (
    <div className={styles.resumeCard}>
      <Flex direction={"col"} gap={20}>
        <h4 className={styles.title}>{designation}</h4>
        {duration && <p className={styles.duration}> {duration}</p>}

        <p>
          {link ? (
            <em>
              <Link href={link} target="_blank">
                {company} ,&nbsp; {address}
              </Link>{" "}
            </em>
          ) : (
            <em>
              {company} ,&nbsp; {address}
            </em>
          )}
        </p>

        {description && <p>{description}</p>}
      </Flex>
    </div>
  );
}
