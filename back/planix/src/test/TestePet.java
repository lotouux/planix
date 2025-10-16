package test;

import dao.PetDAO;
import model.Pet;

import java.sql.Timestamp;
import java.util.List;
import java.util.UUID;

public class TestePet {
    public static void main(String[] args) {
        PetDAO dao = new PetDAO();

        // Inserindo 5 pets
        for (int i = 1; i <= 5; i++) {
            Pet pet = new Pet(
                    UUID.randomUUID().toString(),   // PET_UID
                    100 + i,                        // USER_USER_ID
                    "Pet " + i,                     // NAME
                    (i % 2 == 0) ? "Cachorro" : "Gato", // SPECIES
                    i * 2,                          // PET_LEVEL
                    75.5 + i,                       // HAPPINESS_SCORE
                    (i % 2 == 0) ? "Feliz" : "Animado", // MOOD
                    new Timestamp(System.currentTimeMillis()), // LAST_EVALUATED_AT
                    new Timestamp(System.currentTimeMillis()), // CREATED_AT
                    null,                           // UPDATED_AT
                    false                           // IS_OBSOLETE
            );

            dao.insert(pet);
        }

        // Consultando e exibindo todos os pets
        List<Pet> pets = dao.getAll();
        for (Pet pet : pets) {
            System.out.println(pet);
        }
    }
}
