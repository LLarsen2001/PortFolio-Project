class Userjob < ApplicationRecord
  belongs_to :user
  belongs_to :job

  def self.available(user_id)
    Userjob.find_by_sql(["
    SELECT uj.status, uj.id, uj.job_id, uj.user_id, j.user_id AS created_by, j.company_id, j.salary, j.description, j.remote, j.location, c.baselocation, c.companyname, c.about, u.email
    FROM userjobs AS uj
    LEFT JOIN jobs AS j ON job_id = j.id
    LEFT JOIN companies AS c ON j.company_id = c.id
    LEFT JOIN users AS u ON j.user_id = u.id
    WHERE (uj.user_id)= ?", user_id])
  
  end

end
