class Job < ApplicationRecord
  belongs_to :company
  has_many :userjobs

  def self.availableJobs
    Job.find_by_sql('SELECT j.id, j.jobname, j.salary, j.description, j.remote, j.user_id AS created_by, u.email, u.name, j.location, c.companyname, c.about, c.baselocation "isFilled"
    FROM jobs as j
    INNER JOIN companies as c ON j.company_id = c.id
    INNER JOIN users AS u ON j.user_id = u.id
    WHERE "isFilled" <> TRUE;')
  end

  def self.postedJobs(user_id)
    Job.find_by_sql(["SELECT * 
    FROM jobs as j
    WHERE (j.user_id)= ?", user_id])
  end
end
