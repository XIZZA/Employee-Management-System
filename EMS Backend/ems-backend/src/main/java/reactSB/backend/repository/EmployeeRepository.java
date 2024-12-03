package reactSB.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import reactSB.backend.entity.Employee;

public interface EmployeeRepository extends JpaRepository <Employee, Long> {
}
