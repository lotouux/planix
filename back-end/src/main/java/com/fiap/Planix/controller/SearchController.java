package com.fiap.Planix.controller;

import com.fiap.Planix.model.User;
import com.fiap.Planix.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.time.OffsetDateTime;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/search/")
public class SearchController {

    @Autowired
    private SearchService searchService;

    private User getCurrentUser() {
        User mockUser = new User();
        mockUser.setIdUser(1L);
        return mockUser;
    }

    @GetMapping
    public Map<String, List<?>> unifiedSearch(
            @RequestParam(required = false) String query,
            @RequestParam(required = false) String type) {

        User user = getCurrentUser();
        return searchService.unifiedSearch(user, query, type);
    }

    @GetMapping("filter/transactions")
    public List<?> filterTransactions(
            @RequestParam(required = false) String description,
            @RequestParam(required = false) BigDecimal minAmount,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) OffsetDateTime startDate) {

        User user = getCurrentUser();
        return searchService.filterTransactions(user, description, minAmount, startDate);
    }
}