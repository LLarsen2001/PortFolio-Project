class Job < ApplicationRecord
  belongs_to :company
  has_many :userjobs

  def self.availableJobs
    Job.find_by_sql('SELECT jobname, salary, description, remote, location, companyname, "isFilled"
    FROM jobs as j
    INNER JOIN companies as c
    ON j.company_id = c.id
    WHERE "isFilled" <> TRUE;')
  end
end
