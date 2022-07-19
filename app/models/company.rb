class Company < ApplicationRecord
    has_many :jobs
    
    def self.getCompanyNamesAndIDs
        Company.find_by_sql('SELECT id, companyname FROM companies;')
    end
end
