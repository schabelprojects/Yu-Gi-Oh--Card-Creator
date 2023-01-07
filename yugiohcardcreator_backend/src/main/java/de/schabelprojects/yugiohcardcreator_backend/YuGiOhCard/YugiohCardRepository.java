package de.schabelprojects.yugiohcardcreator_backend.YuGiOhCard;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface YugiohCardRepository extends MongoRepository<YugiohCard, String> {
    
}
